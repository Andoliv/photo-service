package com.andoliv.photo.service.controller;

import com.andoliv.photo.service.external.ExtPhoto;
import com.andoliv.photo.service.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(value = "api")
public class PhotoController {

    @Autowired
    private PhotoService service;

    @PostMapping(value = "upload")
    @ResponseStatus(code = CREATED)
    public ExtPhoto createPhoto(@ModelAttribute ExtPhoto extPhoto) throws IOException {
        return service.addPhoto(extPhoto);
    }

    @GetMapping(value = "photos")
    @ResponseStatus(code = OK)
    public ExtPhoto[] getPhotos() {
        return service.getPhotos();
    }

    @GetMapping(value = "photos/{id}")
    @ResponseStatus(code = OK)
    public ExtPhoto getPhotoById(@PathVariable("id") Long id) {
        return service.getPhotoById(id);
    }
}

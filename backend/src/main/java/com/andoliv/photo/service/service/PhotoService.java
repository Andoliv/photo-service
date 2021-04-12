package com.andoliv.photo.service.service;

import com.andoliv.photo.service.external.ExtPhoto;
import com.andoliv.photo.service.model.Photo;
import com.andoliv.photo.service.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository repository;

    public ExtPhoto addPhoto(ExtPhoto extPhoto) throws IOException {
        Photo photo = toPhoto(extPhoto);
        repository.save(photo);

        return toExtPhoto(photo);
    }

    public ExtPhoto[] getPhotos(){
        List<ExtPhoto> extPhotos = new ArrayList<>();
        List<Photo> photos = repository.findAll();

        photos.forEach(photo -> {
            extPhotos.add(toExtPhoto(photo));
        });

        return extPhotos.toArray(new ExtPhoto[extPhotos.size()]);
    }

    private ExtPhoto toExtPhoto(Photo photo) {
        ExtPhoto extPhoto = new ExtPhoto();
        extPhoto.setId(photo.getId());
        extPhoto.setData(photo.getPhoto());

        return extPhoto;
    }

    private Photo toPhoto(ExtPhoto extPhoto) throws IOException {
        Photo photo = new Photo();
        photo.setId(extPhoto.getId());
        photo.setPhoto(extPhoto.getPhoto().getBytes());

        return photo;
    }

    public ExtPhoto getPhotoById(Long id) {
        Photo photo = repository.findById(id).get();

        return toExtPhoto(photo);
    }
}

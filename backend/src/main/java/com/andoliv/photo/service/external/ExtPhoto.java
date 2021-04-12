package com.andoliv.photo.service.external;

import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

public class ExtPhoto {

    private Long id;
    private MultipartFile photo;
    private byte[] data;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public MultipartFile getPhoto() {
        return photo;
    }

    public void setPhoto(MultipartFile photo) {
        this.photo = photo;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ExtPhoto{" +
                "id=" + id +
                ", photo=" + photo +
                ", data=" + Arrays.toString(data) +
                '}';
    }
}

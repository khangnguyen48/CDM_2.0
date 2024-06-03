package com.minhvu.authservice.dto;


import lombok.Builder;
import lombok.Data;

@Data
public class OtpRequest {
    private String email;
    private String otp;
}

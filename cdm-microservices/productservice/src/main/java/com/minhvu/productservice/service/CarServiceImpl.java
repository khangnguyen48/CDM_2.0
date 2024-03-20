package com.minhvu.productservice.service;

import com.cloudinary.Cloudinary;
import com.minhvu.productservice.dto.CreateCarRequest;
import com.minhvu.productservice.dto.UpdateCarRequest;
import com.minhvu.productservice.model.Car;
import com.minhvu.productservice.repository.CarRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class CarServiceImpl implements CarService {
    private final CarRepository carRepository;

    public Page<Car> getAllProducts(Pageable pageable) {
        return carRepository.findAll(pageable);
    }

    @Override
    public Car getProductById(String id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public Car createProduct(CreateCarRequest request) throws IOException {
//        String imageUrl = uploadProductImage(imageFile);

        return carRepository.save(Car.builder()
                        .model(request.getModel())
                        .disPrice(request.getDisPrice())
                        .orgPrice(request.getOrgPrice())
                        .gift(request.getGift())
                        .count(request.getCount())
                        .odo(request.getOdo())
                        .tech(request.getTech())
                        .range(request.getRange())
                        .trim(request.getTrim())
                        .topSpeed(request.getTopSpeed())
                        .timeToReach(request.getTimeToReach())
                        .imgSrc(request.getImgSrc())
                        .perMonthPrice(request.getPerMonthPrice())
                        .keyFeatures(request.getKeyFeatures())
                        .status(request.getStatus())
                        .build()
        );
    }

    @Override
    public Car updateProduct(UpdateCarRequest updateCarRequest) {
        Car product = carRepository.findById(updateCarRequest.getId()).orElse(null);
        if (product != null) {
            product.setModel(updateCarRequest.getModel());
            product.setDisPrice(updateCarRequest.getDisPrice());
            product.setOrgPrice(updateCarRequest.getOrgPrice());
            product.setGift(updateCarRequest.getGift());
            product.setCount(updateCarRequest.getCount());
            product.setOdo(updateCarRequest.getOdo());
            product.setTech(updateCarRequest.getTech());
            product.setRange(updateCarRequest.getRange());
            product.setTrim(updateCarRequest.getTrim());
            product.setTopSpeed(updateCarRequest.getTopSpeed());
            product.setTimeToReach(updateCarRequest.getTimeToReach());
            product.setImgSrc(updateCarRequest.getImgSrc());
            product.setPerMonthPrice(updateCarRequest.getPerMonthPrice());
            product.setKeyFeatures(updateCarRequest.getKeyFeatures());
            product.setStatus(updateCarRequest.getStatus());

            return carRepository.save(product);
        }
        throw new RuntimeException("Product not found");
    }
    @Override
    public List<Car> findProductByModelIgnoreCase(String model) {
        return carRepository.findAllByModelIgnoreCase(model);
    }

    @Override
    public void deleteProduct(String id) {
        carRepository.deleteById(id);
    }

    @Override
    public List<Car> findCarsByNameContains(String name) {
        return carRepository.findAllByTrimContainsIgnoreCase(name);
    }
}

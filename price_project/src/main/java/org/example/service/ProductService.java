package org.example.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.model.Product;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;


@Service
public class ProductService {

    public List<Product> getProducts() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            InputStream inputStream = getClass().getResourceAsStream("/data/products.json");
            List<Product> products = mapper.readValue(inputStream, new TypeReference<>() {});
            products.forEach(product -> {
                if (product.getPrice() > 50) {
                    product.setDiscountedPrice(product.getPrice() * 0.8);
                }
            });
            return products;
        } catch (Exception e) {
            throw new RuntimeException("Failed to load products", e);
        }
    }
}

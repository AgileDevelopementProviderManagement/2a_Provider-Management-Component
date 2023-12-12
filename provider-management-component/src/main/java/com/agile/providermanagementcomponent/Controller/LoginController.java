package com.agile.providermanagementcomponent.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/getmanagement")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}

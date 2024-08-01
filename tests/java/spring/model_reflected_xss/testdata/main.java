package com.example.model.xss;

import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

  @PostMapping("/updateUser")
  public String updateUser(@RequestParam(name = "bad") String bad, Model model) {
      // bearer:expected java_spring_model_reflected_xss
      model.addAttribute("displayname", bad);
  }

  @PostMapping("/submit")
  public String updateUser(@RequestParam(id = "id") String id, Model model) {
      model.addAttribute("selected", Integer.parseInt(id));
  }
}

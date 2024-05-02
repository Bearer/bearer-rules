// Use bearer:expected java_spring_missing_session_fixation to flag expected findings
package com.hunter2.sessionfixation.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void badConfigure(HttpSecurity http) throws Exception {
      // bearer:expected java_spring_missing_session_fixation
      http
          .sessionManagement().sessionFixation().none()
   }

  @Override
  protected void okConfigure(HttpSecurity http) throws Exception {
    http.sessionManagement().sessionFixation().newSession()
  }
}

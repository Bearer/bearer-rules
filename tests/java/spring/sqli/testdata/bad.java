package com.example.sqli;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreatorFactory;

public class Foo {
   @Autowired
   JdbcTemplate t;

   public void updateUser() {
      String myQueryStr = "update user set name='"+request.getParameter("name")+"' where id='"+request.getParameter("userId")+"'";

// bearer:expected java_spring_sqli
      var factory = new PreparedStatementCreatorFactory(myQueryStr, Types.VARCHAR);
// bearer:expected java_spring_sqli
      factory.newPreparedStatementCreator(myQueryStr, []);

// bearer:expected java_spring_sqli
      t.batchUpdate("ok", myQueryStr);
// bearer:expected java_spring_sqli
      t.execute(myQueryStr);
   }
}

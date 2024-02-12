package com.example.sqli;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreatorFactory;

public class Foo {
   @Autowired
   JdbcTemplate t;

   HttpServletRequest request;

   public void updateUser() {
      String myQueryStr = "update user set name='"+request.getParameter("name")+"' where id='"+request.getParameter("userId")+"'";

      var factory = new PreparedStatementCreatorFactory(myQueryStr, Types.VARCHAR);
      factory.newPreparedStatementCreator(myQueryStr, new Object[] {});

      t.batchUpdate("ok", myQueryStr);
      t.execute(myQueryStr);
   }
}

import org.springframework.jdbc.core;

public class Foo {
   public Bar updateUser(HttpServletRequest request, HttpServletResponse response) {
      String myQueryStr = "update user set name='"+request.getParameter("name")+"' where id='"+request.getParameter("userId")+"'";
      JdbcTemplate.update(myQueryStr);
   }
}
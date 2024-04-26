package servlets;

import java.sql.*;

public class SQLExample {
   static final String DB_URL = "jdbc:mysql://localhost/bearer";
   static final String USER = "guest";
   static final String PASS = "guest";

   HttpServletRequest request;

   public static void main() {
      var param = request.getParameter("id");
      String sqlQuery = "select name from users where id='"+ param + "'";

      // Open a connection
      try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         Statement stmt = conn.createStatement();
         // bearer:expected java_lang_sqli
         ResultSet rs = stmt.executeQuery(sqlQuery);) {
         // Extract data from result set
         while (rs.next()) {
            // Retrieve by column name
            System.out.println(", Name: " + rs.getString("name"));
         }
         // bearer:expected java_lang_sqli
         conn.prepareStatement(sqlQuery, 42);
      } catch (SQLException e) {
         e.printStackTrace();
      }

      EntityManagerFactory emf=Persistence.createEntityManagerFactory("Student_details");
      // bearer:expected java_lang_sqli
      emf.createEntityManager().createQuery(sqlQuery);
   }

   public static void conTest(Connection x) {
      // bearer:expected java_lang_sqli
      x.prepareStatement("select " + request.getParameter("id"));
   }

   public static void stmtTest(Statement x) {
      // bearer:expected java_lang_sqli
      x.executeQuery("select " + request.getParameter("id"));
   }

   public static void emTest(EntityManager x) {
      // bearer:expected java_lang_sqli
      x.createQuery("select " + request.getParameter("id"));
   }

   public static void dynamicVarTest(EntityManager x, String someString, String[] args) {
      // bearer:expected java_lang_sqli
      x.createQuery("select " + someString);
      // bearer:expected java_lang_sqli
      x.createQuery("select " + args[1]);
   }
}

import org.springframework.jdbc.core;

public class Foo {
   public Bar updateUser(final String name, final Int id) {
      JdbcTemplate.update(new PreparedStatementCreator() {
         public PreparedStatement createPreparedStatement(final Connection conn) throws SQLException {
            final PreparedStatement myQuery = conn.prepareStatement("update user set name = ? where id = ?");
            myQuery.setString(1, name);
            myQuery.setInt(2, id);
            return myQuery;
         }
      });
   }
}
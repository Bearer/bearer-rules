import org.springframework.jdbc.core;

public class Foo {
   @Autowired
   JdbcTemplate t;

   public Bar updateUser(final String name, final Int id) {
      JdbcTemplate.update(new PreparedStatementCreator() {
         public PreparedStatement createPreparedStatement(final Connection conn) throws SQLException {
            final PreparedStatement myQuery = conn.prepareStatement("update user set name = ? where id = ?");
            myQuery.setString(1, name);
            myQuery.setInt(2, id);
            return myQuery;
         }
      });

      var factory = new PreparedStatementCreatorFactory("ok", Types.VARCHAR);
      factory.newPreparedStatementCreator("ok", []);

      t.batchUpdate("ok", "ok");
      t.execute("ok");
   }
}

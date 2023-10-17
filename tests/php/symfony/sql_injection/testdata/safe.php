<?php

class FooRepository extends ServiceEntityRepository
{
  public function ok1(): array
  {
    // SQL Prepared Statements: Positional
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bindValue(1, $_GET['username']);
    $resultSet = $stmt->executeQuery();

    return $resultSet;
  }

  public function ok2(): array
  {
    // SQL Prepared Statements: Named
    $sql = "SELECT * FROM users WHERE username = :user";
    $stmt = $connection->prepare($sql);
    $stmt->bindValue("user", $_GET['username']);
    $resultSet = $stmt->executeQuery();

    return $resultSet;
  }

  public function ok3(): array
  {
    // DQL Prepared Statements: Positional
    $dql = "SELECT u FROM User u WHERE u.username = ?1";
    $query = $em->createQuery($dql);
    $query->setParameter(1, $_GET['username']);
    $data = $query->getResult();

    return $data;
  }

  public function ok4(): array
  {
    // DQL Prepared Statements: Named
    $dql = "SELECT * FROM Foo WHERE bar = :bar";
    $query = $em->createQuery($dql);
    $query->setParameter("bar", $_GET['bar']);
    $data = $query->getResult();

    return $data;
  }


  public function ok5(): array
  {
    $conn = $this->getEntityManager()->getConnection();
    $sql = "SELECT * FROM foo WHERE bar = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(1, $_GET['bar']);
    $resultSet = $stmt->executeQuery();

    return $resultSet;
  }

  public function ok6(): array
  {
    $conn = $this->getEntityManager()->getConnection();

    $query = $conn->createQuery("SELECT * FROM foo WHERE bar = '" . $conn->quote($_GET['bar']) . "'");
    $data = $query->getResult();
    return $data;
  }

  private function oops4(int $oopsie): array
  {
      $conn = $this->getEntityManager()->getConnection();

      $query = $conn->createQuery("SELECT * FROM foo WHERE bar = '" . $conn->quote($oopsie) . "'");
      $data = $query->getResult();
      return $data;
  }
}
?>
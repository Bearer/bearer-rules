<?php

class FooRepository extends ServiceEntityRepository
{
    public function oops1(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "SELECT * FROM foo WHERE foo.bar > " . $_GET['oops']. " ORDER BY foo.bar ASC";
# bearer:expected php_symfony_sql_injection
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAllAssociative();
    }

    public function oops2(): array
    {
        $conn = $this->getEntityManager()->getConnection();

# bearer:expected php_symfony_sql_injection
        $query = $conn->createQuery("SELECT * FROM foo WHERE bar = '" . $_GET['bar'] . "'");
        $data = $query->getResult();
        return $data;
    }

    public function oops3(string $bar): array
    {
        $conn = $this->getEntityManager()->getConnection();

        # bearer:expected php_symfony_sql_injection
        $query = $conn->createQuery("SELECT * FROM foo WHERE bar = '" . $bar . "'");
        $data = $query->getResult();
        return $data;
    }
}

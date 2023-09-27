<?php

class FooRepository extends ServiceEntityRepository
{
    public function oops1(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "SELECT * FROM foo WHERE foo.bar > " . $_GET['oops']. " ORDER BY foo.bar ASC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAllAssociative();
    }

    public function oops2(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $query = $conn->createQuery("SELECT * FROM foo WHERE bar = '" . $_GET['bar'] . "'");
        $data = $query->getResult();
        return $data;
    }
}

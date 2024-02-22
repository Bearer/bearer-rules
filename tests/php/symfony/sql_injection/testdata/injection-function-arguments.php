<?php

class FooRepository extends ServiceEntityRepository
{
    public function oops3($oopsie): array
    {
        $conn = $this->getEntityManager()->getConnection();
        # bearer:expected php_symfony_sql_injection
        $query = $conn->createQuery("SELECT * FROM foo WHERE bar = '" . $oopsie . "'");
        $data = $query->getResult();
        return $data;
    }

    private function oops4(int $oopsie): array
    {
        $conn = $this->getEntityManager()->getConnection();
        # bearer:expected php_symfony_sql_injection
        $query = $conn->createQuery("SELECT * FROM foo WHERE bar = '" . $oopsie . "'");
        $data = $query->getResult();
        return $data;
    }
}

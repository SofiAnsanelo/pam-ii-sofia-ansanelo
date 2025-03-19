<?php
//teste 1
        namespace Tests;

        use PHPUnit\Framework\TestCase;
        use Tests\Unit\Compra;

        class CompraTest extends TestCase
        {
            public function testFreteGratis()
            {
                $compra = new Compra();
                $this->assertTrue($compra->freteGratis(150));
            }
        }
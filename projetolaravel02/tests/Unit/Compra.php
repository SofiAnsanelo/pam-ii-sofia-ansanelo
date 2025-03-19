<?php
        namespace Tests\Unit;

        use PHPUnit\Framework\TestCase;

        class Compra
        {
            public function freteGratis($valor)
            {
                return $valor >= 160;
            }
        }
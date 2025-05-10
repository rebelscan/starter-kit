<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;

return RectorConfig::configure()
    ->withPaths([
        __DIR__ . '/Modules',
        __DIR__ . '/app',
    ])
    ->withPreparedSets(
        privatization: true,
        earlyReturn: true,
        strictBooleans: true,
    )
    ->withTypeCoverageLevel(10)
    ->withDeadCodeLevel(10)
    ->withCodeQualityLevel(10);

<?php

return [
    'ssr' => [
        'enabled' => true,
        'url' => 'http://127.0.0.1:'.env('VITE_INERTIA_SSR_PORT', 13714),
        // 'bundle' => base_path('bootstrap/ssr/ssr.mjs'),
    ],
];

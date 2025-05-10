<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- Preload images -->
    <link rel="preload" href="{{ config('app.logo') }}" as="style" />

    @routes
    @inertiaHead
    @vite(['vendor/rebelscan/core/resources/js/app.js', 'resources/css/app.css'])
</head>

<body>
    @inertia
</body>

</html>

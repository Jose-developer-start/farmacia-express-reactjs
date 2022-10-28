-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2022 a las 22:49:15
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `farmacia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `categoria`, `descripcion`) VALUES
(2, 'Analgesicos', 'dsfsdf'),
(4, 'Vitaminas', 'sdfsdfsd'),
(5, 'Vitaminas', 'sdadsa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dui` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `apellido`, `dui`) VALUES
(3, 'Kenia', 'Alvarado', '123456789-1'),
(4, 'Yamileth', 'Marinero', '123456789-1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `id` int(11) NOT NULL,
  `venta_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `sucursal_id` int(11) NOT NULL,
  `precio_unitario` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `detalle_venta`
--

INSERT INTO `detalle_venta` (`id`, `venta_id`, `producto_id`, `sucursal_id`, `precio_unitario`) VALUES
(1, 23, 1, 0, '0.00'),
(2, 23, 3, 0, '0.00'),
(3, 24, 1, 0, '0.00'),
(4, 24, 3, 0, '0.00'),
(5, 24, 4, 0, '0.00'),
(6, 24, 5, 0, '0.00'),
(7, 24, 6, 0, '0.00'),
(8, 24, 2, 0, '0.00'),
(9, 24, 7, 0, '0.00'),
(10, 25, 2, 0, '0.00'),
(11, 25, 5, 0, '0.00'),
(12, 25, 7, 0, '0.00'),
(13, 26, 2, 0, '0.00'),
(14, 26, 4, 0, '0.00'),
(15, 26, 3, 0, '0.00'),
(16, 27, 2, 0, '0.00'),
(17, 28, 2, 0, '0.00'),
(18, 28, 4, 0, '0.00'),
(19, 29, 2, 0, '0.00'),
(20, 29, 4, 0, '0.00'),
(21, 30, 1, 0, '0.00'),
(22, 30, 2, 0, '0.00'),
(23, 30, 3, 0, '0.00'),
(24, 31, 1, 0, '0.00'),
(25, 31, 4, 0, '0.00'),
(26, 31, 2, 0, '0.00'),
(27, 31, 3, 0, '0.00'),
(28, 32, 1, 0, '0.00'),
(29, 32, 2, 0, '0.00'),
(30, 32, 3, 0, '0.00'),
(31, 33, 1, 0, '0.00'),
(32, 33, 3, 0, '0.00'),
(33, 33, 2, 0, '0.00'),
(34, 34, 1, 0, '0.00'),
(35, 34, 3, 0, '0.00'),
(36, 34, 2, 0, '0.00'),
(37, 35, 1, 0, '0.00'),
(38, 35, 2, 0, '0.00'),
(39, 35, 3, 0, '0.00'),
(40, 36, 1, 0, '0.00'),
(41, 36, 3, 0, '0.00'),
(42, 36, 2, 0, '0.00'),
(43, 37, 1, 0, '0.00'),
(44, 37, 4, 0, '0.00'),
(45, 37, 2, 0, '0.00'),
(46, 38, 1, 0, '0.00'),
(47, 38, 2, 0, '0.00'),
(48, 38, 3, 0, '0.00'),
(49, 39, 1, 0, '0.00'),
(50, 39, 3, 0, '0.00'),
(51, 39, 2, 0, '0.00'),
(52, 40, 1, 0, '0.00'),
(53, 40, 3, 0, '0.00'),
(54, 40, 2, 0, '0.00'),
(55, 41, 1, 0, '0.00'),
(56, 41, 2, 0, '0.00'),
(57, 42, 4, 0, '0.00'),
(58, 42, 2, 0, '0.00'),
(59, 42, 5, 0, '0.00'),
(60, 42, 6, 0, '0.00'),
(61, 42, 7, 0, '0.00'),
(62, 42, 3, 0, '0.00'),
(63, 42, 1, 0, '0.00'),
(64, 43, 1, 0, '0.00'),
(65, 43, 2, 0, '0.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `producto` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `precio_compra` decimal(10,0) NOT NULL,
  `precio_venta` decimal(8,2) NOT NULL,
  `unidad_medida` varchar(100) NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `imagen_producto` text NOT NULL,
  `stock` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `producto`, `descripcion`, `precio_compra`, `precio_venta`, `unidad_medida`, `fecha_vencimiento`, `imagen_producto`, `stock`, `categoria_id`) VALUES
(1, 'Alkasetser', 'Para dolor de estomago', '56', '10.00', 'miligramos', '2022-10-03', 'C:\\fakepath\\descarga.png', 56, 0),
(2, 'Alka D', 'Alivia los sintomas de la diarre', '3', '5.00', 'miligramos', '2022-10-27', 'C:\\fakepath\\WhatsApp Image 2022-10-03 at 10.01.37 AM.jpeg', 43, 0),
(3, 'Alka D', 'asdasdsa', '0', '10.00', 'miligramos', '2022-10-10', '[object Object]', 3, 1),
(4, 'Samsung', 'dfgdfg', '0', '45.00', 'miligramos', '2022-10-09', '[object Object]', 45, 1),
(5, 'Samsung', 'dfgdfg', '0', '45.00', 'miligramos', '2022-10-09', '[object Object]', 45, 1),
(6, 'Samsung', 'dfgdfg', '0', '45.00', 'miligramos', '2022-10-09', '[object Object]', 45, 1),
(7, 'Penisilina', 'Para combatir todo el hongo y infecciones de la piel', '0', '0.00', 'miligramos', '2022-11-16', '[object Object]', 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `passwd` varchar(150) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `passwd`, `estado`) VALUES
(6, 'Jose Miguel', 'Deodanes', 'servidorvps740@gmail.com', '$2a$10$MPhBjdzTfVrDyTPnWslJTudcLUR4jHHNjceRHdH6qL0YP7BTa0e8G', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `id` int(11) NOT NULL,
  `fecha_venta` date NOT NULL,
  `total_pago` decimal(8,2) NOT NULL,
  `descuento` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id`, `fecha_venta`, `total_pago`, `descuento`, `cliente_id`, `usuario_id`) VALUES
(13, '2022-09-09', '400.00', 0, 1, 1),
(14, '2022-09-09', '400.00', 0, 1, 1),
(15, '2022-09-09', '400.00', 0, 1, 1),
(16, '2022-09-09', '400.00', 0, 1, 1),
(40, '2022-10-17', '25.00', 0, 4, 5),
(41, '2022-10-18', '15.00', 0, 3, 2),
(42, '2022-10-18', '160.00', 0, 3, 2),
(43, '2022-10-21', '15.00', 0, 3, 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

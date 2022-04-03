# SVG
#### *可以通过设置 `overflow: visible` 让超出视窗边界的内容变得可见。



## viewBox

```:no-line-numbers
viewBox = <min-x> <min-y> <width> <height>
```

改变视图盒子位置与大小，当宽高小于视窗宽高会放大，反之亦然。

*目的：通过百分比和viewBox让SVG图形进行自动缩放。



## preserveAspectRatio

强制统一缩放比，以保持图形的宽高比。

```:no-line-numbers
preserveAspectRatio = <align> <meetOrSlice>?
```

- `align` 表示 viewBox 如何与 viewport 对齐。

- `meetOrSlice` 是可选的，表示如何保持宽高比。

  

## SVG绘制

#### 形状：

- 矩形 rect
  1. `width` 和 `height`   高度和宽度
  2. `fill `  填充颜色
  3. `stroke-width`  边框宽度
  4. `stroke`  边框颜色
  4. `x `和`y`   矩形的位置
  4. `opacity`  整个元素的透明值(0-1)
  4. `fill-opacity`  填充颜色透明度
  4. `stroke-opacity`  笔触颜色的透明度
  4. `rx` 和 `ry`   矩形产生圆角。
  
- 圆形 circle

  1. `cx`和`cy`  圆形位置
  2. `r` 圆形半径

- 椭圆 ellipse

  1. `cx`和`cy`  位置
  2. `rx`和`ry`  水平垂直半径

- 线 line

  1. `x1`和`y1`  线条的开始
  2. `x2`和`y2`  线条的结束

- 折线 polyline

- 多边形 polygon

  1. `points`  多边形每个角的 x 和 y 坐标

- 路径 path

  1. M = moveto
  2. L = lineto

  3. H = horizontal lineto

  4. V = vertical lineto

  5. C = curveto

  6. S = smooth curveto

  7. Q = quadratic Belzier curve

  8. T = smooth quadratic Belzier curveto

  9. A = elliptical Arc

  10. Z = closepath

      

## SVG 滤镜





## SVG 渐变

* 线性渐变

  ```:no-line-numbers
  <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:rgb(255,255,0); stop-opacity:1"/>
    <stop offset="100%" style="stop-color:rgb(255,0,0); stop-opacity:1"/>
  </linearGradient>
  ```

  > 代码解释：
  >
  > - `linearGradient` 标签的 id 属性可为渐变定义一个唯一的名称
  > - fill:url(#orange_red) 属性把 ellipse 元素链接到此渐变
  > - `linearGradient` 标签的 x1、x2、y1、y2 属性可定义渐变的开始和结束位置
  > - 渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个 `stop` 标签来规定。offset 属性用来定义渐变的开始和结束位置。

* 放射渐变

  ```:no-line-numbers
  <radialGradient id="grey_blue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
    <stop offset="0%" style="stop-color:rgb(200,200,200);stop-opacity:0"/>
    <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1"/>
  </radialGradient>
  ```

  

  > 代码解释：
  >
  > - `radialGradient` 标签的 id 属性可为渐变定义一个唯一的名称
  > - cx、cy 和 r 属性定义外圈，而 fx 和 fy 定义内圈 











---

#### 参考：

[深入理解SVG系列](https://segmentfault.com/a/1190000015652209)




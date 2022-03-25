# Project Euler 009 - Special Pythagorean Triplet

A Pythagorean Triplet is a set of three natural numbers, a < b < c, for which a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.

For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.

There exists exactly one Pythagorean Triplet for which a + b + c = 1000.
The aim is to find the product abc, such that a+b+c=n.

Information at [Project Euler 009](https://projecteuler.net/problem=9)

## UX

**Getting Started**

Enter a whole number between 6 and 1000.

**User Stories**

As a user, I expect the function `specialPythagoreanTriplet(24)` to return a number.

As a user, I expect the function `specialPythagoreanTriplet(24)` to return 480.

As a user, I expect the function `specialPythagoreanTriplet(120)` to return 49920, 55080 or 60000.

As a user, I expect the function `specialPythagoreanTriplet(1000)` to return 31875000.

**Information Architecture**

The function `specialPythagoreanTriplet(n)` returns a number, where `n` is a number between 6 and 1000.
// I want you to consider a year that is not divisible by 4, say 1023. Let's see how that will be evaluated.

return ((a) && (b) || c);
// I've replaced the inner expressions with a, b and c 
// to better demonstrate the evaluation

year = 1023
return ((1023 % 4 === 0) && (b) || c);
// First a is expanded and the variables bound
//
// It's a composite expression, x === 0 where x is the 
// result of the expression 1023 % 4

return ((3 === 0) && (b) || c);

return ((false) && (b) || c);

return (false && (b) || c);
// Because && is short-circuited, (b) will **not** be
// evaluated as short-circuiting translates to:
//  
// - q && w will not consider w if the entire
//   expression can not be true (read: q is falsy)
//   --> in that case it doesn't matter what w is, 
//   as (false && ?) is always false
//
// - q || w will not consider w if the entire 
//   expression can not be false (read: q is truthy)
//   --> in that case it doesn't matter what w is, 
//   as (true || ?) is always true

return (false || c);
// This has short-circuited the &&, which has evaluated
// to false. But because the left side of the logical
// OR || is false, it MUST evaluate c, and this is
// where the code is not optimal.

return (c)
// If the left side of || is false, the result of the
// q || w expression is always w.

return (year % 400 === 0)

return (1023 % 400 === 0)
// If a year is NOT divisible by 4, it mathematically
// can not be divisible by 400 (because: prime factors)
// So this test is completely redundant.

return (223 === 0)

return (false)

return false

As you can see, the issue is with the operator precedence of the logical operators. The solution is adding a pair of parentheses in the right spot. A hint is looking at the original textual algortihmic description.

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400

If we put that in pseudo-code:

if year.divisible_by(4) then (
  !year.divisible_by(100) && year.divisible_by(400)
)

Can you add the parentheses in the right place for me?

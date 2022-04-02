1) Give three examples of Python programs that use binary operators and/or builtins from this PA, but have different behavior than your compiler. 
- E.g. 1: The statement 'print("I" + "hate" + "salad")' prints 'Ihatesalad' on a Python IDLE while this PA returns 'Error: Could not parse expr at 6 9: "I"'
This is because we have not supported strings/ their concatenation in our program. 
This can be done by introducing string concatenation (somewhat like a binary expression with only + operator supported and with string type of operands) and modifying parser.ts and webstart.ts to support it.

- E.g. 2: The statement 'pow(2,99)' returns '633825300114114700748351602688' on a Python IDLE while this PA returns '0'
This is because we have not handled cases of overflow/underflow. Also, in every math expression, we have defaulted to using i32/Number data type which does not support long/decimal numbers. 
We can support such operations by typecasting results in a 'long' datatype variable wherever operations are performed by checking integer overflow.

- E.g. 3: The statement '1+(2*6)' returns '13' on a Python IDLE while this PA returns 'Error: Could not parse expr at 2 7: (2*6)'
This is because we do not have parsing for parantheses in expressions.
Additional parsing can be added in parser.ts depending upon the expression tree and precedence logic can be added for parantheses.


2) What resources did you find most helpful in completing the assignment?
- TA office hours

3) Who (if anyone) in the class did you work with on the assignment?
- Got help from Yousef Alhessi's tutorial
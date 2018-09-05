# JS-HashSort
A performant sorting function for duplicate values - O(n)

Uses a 'hash' table to store duplicate values, sorts the unique values, then returns the full sorted array.

NOTE: This function as particularly efficient at sorting large data sets with more than a few duplicate values. If values are unique, the hashing overhead is wasted, use quick sort or merge sort

#Set Creation & Basic Operations: Create a set with at least five elements, add a new element, remove an existing one, and check if a specific value is present in the set.
set = {2, 4, 6, 8, 10, 12}
set.add(5)
set.remove(8)
to_check = 5
is_present = to_check in set

print(f"Updated set: {set}")
print(f"Is {to_check} present in the set? {is_present}")

#done
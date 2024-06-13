<!-- PART 1 -->

Given the list of lounges and airports

- Give me the unique list of airports with lounges available

<!-- PART 2 -->

Here are more requirements from the product manger:

1. Create a searchbar such that when you search for an airport, if the airport has lounge(s), you show the available lounge(s)
   - show the lounge name,
   - show image of the lounge
   - location of lounge
2. If the airport does not have a lounge, shows no lounge available

Instead of typing the exact airport name, give suggestions when the search query contains the country name

- e.g when I type Chi -->Weifang Changde Airport, Changchun Longjia International Airport should appear

<!-- PART 3 -->

Add a debounce function such that it prevents the search event from being processed until the user has ceased typing for a certain length of time.

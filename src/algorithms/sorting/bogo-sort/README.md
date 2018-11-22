# BogoSort

Bogosort, also known as permutation sort, stupid sort, slowsort, shotgun sort or monkey sort, is a highly inefficient sorting method based on the "generate and test" paradigm. In randomized Bogosort, the array is first shuffled randomly and then tested to determine if the array is in the correct order. If not in the correct order, the process is repeated. Once the array is successfully tested to be in the right order, the sorted array is returned.

This algorithm should be used for educational purposes and not in production code due to its poor performance.

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bogosort**       | n              | (n + 1)!       | Unbounded       | 1         | No       |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bogosort)

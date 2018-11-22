import BogoSort from '../BogoSort';
import { SortTester } from '../../SortTester';

const sortedArr = [1, 2, 3, 4, 5];
const reverseArr = [5, 4, 3, 2, 1];
const notSortedRandomArr = [15, 8, 5, 12, 10];
const sortedRandomArr = [5, 8, 10, 12, 15];
const equalArr = [1, 1, 1, 1, 1];
const negativeArr = [-1, 0, 5, -10, 20];
const negativeArrSorted = [-10, -1, 0, 5, 20];

const EQUAL_ARRAY_VISITING_COUNT = equalArr.length - 1;
const SORTED_ARRAY_VISITING_COUNT = sortedArr.length - 1;

describe('BogoSort', () => {
  it('should sort array', () => {
    const sorter = new BogoSort();
    expect(sorter.sort([])).toEqual([]);
    expect(sorter.sort([1])).toEqual([1]);
    expect(sorter.sort([1, 2])).toEqual([1, 2]);
    expect(sorter.sort([2, 1])).toEqual([1, 2]);
    expect(sorter.sort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(sorter.sort(sortedArr)).toEqual(sortedArr);
    expect(sorter.sort(notSortedRandomArr)).toEqual(sortedRandomArr);
    expect(sorter.sort(reverseArr)).toEqual(sortedArr);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BogoSort);
  });

  it('should sort negative numbers', () => {
    const sorter = new BogoSort();
    expect(sorter.sort(negativeArr)).toEqual(negativeArrSorted);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BogoSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BogoSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });
});

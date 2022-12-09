/**
 * quick_sort_template
 */
function quick_sort(array, left, right) {

  if(left >= right) return array

  const pivot = array[left]
  let i = left - 1
  let j = right + 1

  while(i < j) {

    do { i++ } while(array[i] < pivot)
    do { j-- } while(array[j] > pivot)
    
    if(i < j) {
      let t = array[i]
      array[i] = array[j]
      array[j] = t
    }

  }

  quick_sort(array, left, j)
  quick_sort(array, j+1, right)

  return array
}
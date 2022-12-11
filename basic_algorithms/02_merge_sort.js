/**
 * merge_sort_template
 */
function merge_sort(array, left, right) {

  if(left >= right) return

  const mid = left + right >> 1
  merge_sort(array, left, mid)
  merge_sort(array, mid + 1, right)

  let i = left
  let j = mid + 1
  let tem = []

  while(i <= mid && j <= right) {
    if(array[i] <= array[j]) tem.push(array[i++])
    else tem.push(array[j++])
  }
  
  while(i <= mid) tem.push(array[i++])
  while(j <= right) tem.push(array[j++])

  for(i = left, j = 0; j < tem.length; i++, j++) {
    array[i] = tem[j]
  }

}

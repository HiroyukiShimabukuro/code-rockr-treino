// Dado dois arrays de inteiros não vazios, determine se os valores do segundo array estão na mesma ordem no primeiro array.

// public boolean isSubsequent(int[] values, int[] sequence)

// Exemplo entrada
// isSubsequent(new int[]{5, 1, 22, 25, 6, -1, 8, 10}, new int[]{1, 6, -1, 10})
// Exemplo saída
// true
  const one = [5, 1, 22, 25, 6, -1, 8, 10]
  const two = [1, 6, -1, 10]
  
  let exist = two.filter((el, index)=>{
    if(one.includes(el))
    return el;
  })
  console.log(exist);
  console.log(two);

  let sequence = exist.some((el,index) =>{
    
    if(two[index] == el) el;
    else 
    return false;
  })
  
  console.log(sequence);
  
  const letras = ['g','g','y','c','c','c','q','c','y','y']
  console.log(letras);
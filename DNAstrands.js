function DNAStrand(dna){
  const pairs = {A: 'T', T: 'A', G: 'C', C: 'G' };
  let strand = '';
  for (let i = 0; i < dna.length; i++) {
    strand += pairs[dna[i]];
  }
  return strand;
}

<script>
  import { faker } from '@faker-js/faker';
  import { browser } from '$app/environment';

  function setStorage(key, value) {
    if (browser) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }
  function getFromStorage(key) {
    return null;
    if (browser) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch(e) {
        console.log(e);
      }
    }
    return null;
  }
  let k = '';
  let e = '';
  let n = '';
  const ks = new Set();
  console.log('getfrombullshit', getFromStorage('ks'));
  if (getFromStorage('ks')) {
    console.log('local store has something', getFromStorage('ks'), "adding to ks");
    console.log("saving storage as variable kstore");
    const kstore = getFromStorage('ks');
    console.log("kstore is", kstore);
    for (let i = 0; i < kstore.length; i++) {
      console.log(`adding ${kstore[i]} to set on iteration ${i+1}`);
      ks.add(kstore[i]);
    }
    console.log("ks now has", [...ks]);
    
  }
  const es = new Set();
  if (getFromStorage('es')) {
    es.add(...getFromStorage('es'));
    console.log('local store has something', getFromStorage('es'), "adding to es");
    console.log("saving storage as variable estore");
    const estore = getFromStorage('es');
    console.log("estore is", estore);
    for (let i = 0; i < estore.length; i++) {
      console.log(`adding ${estore[i]} to set on iteration ${i+1}`);
      es.add(estore[i]);
    }
    console.log("es now has", [...es]);
  }
  const ns = new Set();
  if (getFromStorage('ns')) {
    ns.add(...getFromStorage('ns'));
    console.log('local store has something', getFromStorage('ns'), "adding to ns");
    console.log("saving storage as variable nstore");
    const nstore = getFromStorage('ns');
    console.log("nstore is", nstore);
    for (let i = 0; i < nstore.length; i++) {
      console.log(`adding ${nstore[i]} to set on iteration ${i+1}`);
      ns.add(nstore[i]);
    }
    console.log("ns now has", [...ns]);
  }
  
  console.log(ks, typeof ks);
  let breakK = 0;
  let breakE = 0;
  let breakN = 0;
  while (k.charAt(0) !== 'k') {
    k = faker.word.words({ count: 1 });
    // console.log(k);
    if (breakK++ > 5000) {
      console.log(`breaker limit triggered for k on ${k}`);
      break;
    }
  }
  if (k.charAt(0) === 'k') {
    console.log(`generated k as ${k}`, 'adding to ks');
    console.log("ks currently has", [...ks]);
    ks.add(k);
    console.log("ks now has", [...ks]);
    console.log('copying data to store', [...ks]);
    setStorage('ks', [...ks]);
    console.log('store now has', getFromStorage('ks'));
  }
  while (e.charAt(0) !== 'e') {
    e = faker.word.words({ count: 1 });
    // console.log(e);
    if (breakE++ > 5000) {
      console.log(`breaker limit triggered for e on ${e}`);
      break;
    }
  }
  if (e.charAt(0) === 'e') {
    console.log(`generated e as ${e}`);
    console.log("es has", es);
    es.add(e);
    setStorage('es', [...es]);
  }
  while (n.charAt(0) !== 'n') {
    n = faker.word.words({ count: 1 });
    // console.log(n);
    if (breakN++ > 5000) {
      console.log(`breaker limit triggered for n on ${n}`);
      break;
    }
  }
  if (n.charAt(0) === 'n') {
    console.log(`generated n as ${n}`);
    console.log("ns has", ns);
    ns.add(n);
    setStorage('ns', [...ns]);
  }
</script>

<h1>Random bullshit, go!</h1>
<p>K.E.N. can stand for: </p>
<ol>
  {#each ks as ak}
    {#each es as ae}
      {#each ns as an}
        <li>
          {ak}
          {ae}
          {an}
        </li>
        {/each}
      {/each}
    {/each}
</ol>
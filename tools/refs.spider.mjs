import fs from 'fs';

// import axios from 'axios';

const files_d = 'data/refs_raw';

const refs = [];

for (const f of fs.readdirSync(files_d).sort()) {
  const refs_chunk = JSON.parse(fs.readFileSync(files_d + '/' + f)).results.map(
    ({ description, image_link, title }) => ({
      brand_fk: 0,
      cat_fk: 0,
      desc: description,
      title,
      img: image_link,
    })
  );
  refs.push(...refs_chunk);
}

refs.unshift({
  brand_fk: 0,
  cat_fk: 0,
  desc: '',
  title: '',
  img: '',
});

let i = 0;
for (const ref of refs) {
  ref.id = i;
  i += 1;
}

fs.writeFileSync(
  'data/refs.json',
  JSON.stringify(
    refs.filter((o) => o.id !== 139),
    0,
    2
  )
);

// downloadImg(refs);

// async function downloadImg(refs) {
//   for (const ref of refs) {
//     if (ref.id === 139) {
//       const suffix = ref.img.split('.').pop();

//       await axios({
//         method: 'get',
//         url: ref.img,
//         responseType: 'stream',
//       })
//         .then(function (response) {
//           response.data.pipe(
//             fs.createWriteStream(`media/refs/img/ref_${ref.id}.${suffix}`)
//           );
//         })
//         .catch(function (err) {
//           console.log(err);
//           process.exit(1);
//         });

//       console.log(ref.img);

//       await sleep(500);
//     }
//   }
// }

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

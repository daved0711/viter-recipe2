export const imgPath = "http://localhost/viter-recipe-v2/public/img";
export const projectURL = "http://localhost/viter-recipe-v2";

export const devApiUrl = `${projectURL}/rest`;
export const devBaseUrl = `${projectURL}`;
export const devBaseImgUrl = `${imgPath}`;

export const ver = "v1";
export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

export const fetchFormData = (url, fd = {}) => {
  console.log(fd);
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};

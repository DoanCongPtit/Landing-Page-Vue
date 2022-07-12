<template>
  <div class="container main">
    <div class="row">
      <div class="col-md-6">
        <div class="left-el">
          <h3>Apply for fall 2019</h3>
          <p>
            Gravida nibh vel velit auctor aliquetn sollicitudirem sem
            quibibendum auci elit cons equat ipsutis sem nibh id elituis sed
            odio sit amet nibh vulputate cursus equat ipsutis.
          </p>
          <button type="button" class="btn">Apply now</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="right-el">
          <h3>Apply for scholarship</h3>
          <p>
            Gravida nibh vel velit auctor aliquetn sollicitudirem sem
            quibibendum auci elit cons equat ipsutis sem nibh id elituis sed
            odio sit amet nibh vulputate cursus equat ipsutis.
          </p>
          <button type="button" class="btn">Apply now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main{
  margin-top: 100px;
  
}
.left-el {
  background-color: #07294d;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 45px 50px 50px;
}
.right-el {
  background-color: #092e56;
  border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  padding: 45px 50px 50px;
}
.col-6{
    padding: 0;
}
h3 {
  font-size: 30px;
  color: #fff;
  padding-bottom: 15px;
  font-weight: 700;
}
p{
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: #fff;
    padding-bottom: 45px;
}
.btn{
    background-color: yellow;
    border: 1px solid #ffc600;
    color: #07294d;
    cursor: pointer;
    font-weight: 500;
    padding: 0 35px;
    font-size: 16px;
    font-weight: 700;
    line-height: 50px;
}
.btn:hover{
    background-color: #07294d;
    color: yellow;
}
</style>
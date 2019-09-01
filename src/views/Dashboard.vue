<template>
   <div class="home">
       <table>
           <tr>
               <td>USD</td>
               <td>EUR</td>
               <tr>{{ usd }}</tr>
               <tr>{{ eur }}</tr>
           </tr>
       </table>
   </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'dashboard',
    data: function () {
      return {
          usd: null,
          eur: null
      }
    },
    created: function () {
      var url = 'https://www.cbr-xml-daily.ru/daily_json.js'
        this.$http.get(url).then(response => {
            this.usd = response.body.Valute.USD.Value;
            this.eur = response.body.Valute.EUR.Value;
        }, response => {

        });
    }
}
</script>

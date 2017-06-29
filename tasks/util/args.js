import yargs from 'yargs';

const args = yargs
.option('production',{
  boolean:true,
  defauilt:false,
  describe:'min all scripts'
})

.option('watch',{
  boolean:true,
  defauilt:false,
  describe:'watch all scripts'
})

.option('verbose',{
  boolean:true,
  defauilt:false,
  describe:'log'
})

.option('sourcemaps',{
  describe:'force the creation of sourcemaps'
})
.option('port',{
  string:true,
  defauilt:false,
  describe:'server port'
})

.argv
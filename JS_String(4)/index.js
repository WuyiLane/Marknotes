let browserType = "mozilla";
console.log( browserType.length) // 7
// 检索 特定字符串字符
console.log( browserType[0]) // m
                                                    //6
console.log( browserType[browserType.length - 1]) // a
console.log(browserType.indexOf('zilla')) // “zilla”从“mozilla”内的位置2 
 // 找出一个较小的字符串是否存在于一个较大的字符串中（我们通常会说一个字符串中存在一个子字符串）。 这可以使用indexOf()
// 方法来完成，该方法需要一个parameter — 你想要搜索的子字符串。 尝试以下：

if( browserType.indexOf('mozilla') != -1){

}
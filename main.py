try:
  file = open("status.txt", "r")
  text = file.read()

  text = int(text.removeprefix("status: "))

  match text:
    case 200:
      print("status: 200")
      print("your app is running great! for now, you don't have to worry.")
    case 500:
      print("status: 500")
      print("your app is crashing on your side! try and fix the error from your files. ")
    case 501:
      print("status: 501")
      print("you did not implement a request. try and see what request you are trying to do (eg: post) and implement it.")
    case 508:
      print("status: 508")
      print("there is a loop going on forever. this might be due to a recursive function or while/for loop")
except OSError:
  print("please run the app using the command 'node index.js' to use this tool.")
#include <iostream>
using namespace std;

int main() {
  cout << "hello world!" << endl;
}

struct player {
  string name;
  int guess;
};

struct game {
  player player1;
  player player2;
  int randomNumber;
};


void creatPlayer() {};

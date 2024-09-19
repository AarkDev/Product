
// class Rectangle{
// private:
// float length;
// float width;

// public :
// void setdimentions(float l,float w){
//     length=l;
//     width=w;
// }
// float area(){
//     return length*width;
// }

// };
// int main()
// {
//     Rectangle r1;
//     r1.setdimentions(1.11,2.11);

//     cout<<"Area of a rectangle is : "<<r1.area()<<endl;
// }
            // program2

// class student{
// private:
// double enNo;

// public:
// string name;

// void setenNo(double no){
//     enNo=no;
// }

// double getenNo(){
//     return enNo;
// } 

// };



// int main(){
// student s1;
// s1.name="Utkarsh Sahu";
// s1.setenNo(230020);

// cout<<"Your Enroolment No is : "<<s1.getenNo()<<"   and name is "<<s1.name<<endl;
// }
#include <iostream>
using namespace std;

class Person {
  public:
    string name;
    string course;
    double id;
    double age;
};

class Student : public Person {
  public:
    string dept;

    // Non-parameterized constructor
    Student() {
        cout << "I am a non-parameterized constructor" << endl;
    }

    // Parameterized constructor with initialization list
    Student(string n, string c, double i, double a, string d) : dept(d) {
        name = n;
        course = c;
        id = i;
        age = a;
    }

    // Method to display information
    void getInfo() {
        cout << "Name: " << name << endl;
        cout << "Course: " << course << endl;
        cout << "ID: " << id << endl;
        cout << "Age: " << age << endl;
        cout << "Dept: " << dept << endl;
    }
};

int main() {


    return 0;
}





















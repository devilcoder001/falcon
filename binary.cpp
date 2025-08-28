#include <iostream>
using namespace std;

int binary_search(int arr[], int n, int key) {
    int l = 0;
    int h = n - 1;

    while (l <= h) {               
        int mid = l + (h - l) / 2;

        if (arr[mid] == key) {
            return mid;          
        } 
        else if (arr[mid] > key) {
            l = mid + 1;          
        } 
        else {
            h = mid - 1;          
        }
         return -1; 
    }
}

                      

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;

    int arr[n];
    cout << "Enter sorted elements of the array: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int key;
    cout << "Enter the element to search: ";
    cin >> key;

    int result = binary_search(arr, n, key);

    if (result != -1)
        cout << "Element found at index " << result << endl;
    else
        cout << "Element not found" << endl;

    return 0;
}

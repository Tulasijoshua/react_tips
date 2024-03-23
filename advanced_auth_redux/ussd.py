class AirtimePurchaseSystem:
    def __init__(self):
        self.users = {}  # Dictionary to store user data
        self.providers = ["MTN", "Airtel", "Glo", "9Mobile"]  # Array of available providers

    def register_user(self):
        name = input("Enter your name: ")
        phone_number = input("Enter your phone number: ")
        self.users[phone_number] = {"name": name, "balance": 0}

    def top_up_balance(self, phone_number):
        amount = float(input("Enter the amount you want to recharge: "))
        if amount <= 0:
            print("Invalid amount.")
            return
        provider = input("Select your provider (MTN/Airtel/Glo/9Mobile): ").upper()
        if provider not in self.providers:
            print("Invalid provider.")
            return
        self.users[phone_number]["balance"] += amount
        print(f"Recharge of {amount} successfully done for {provider}. New balance: {self.users[phone_number]['balance']}")

    def display_balance(self, phone_number):
        print(f"Your current balance is: {self.users[phone_number]['balance']}")

    def start(self):
        print("Welcome to Airtime Purchase USSD System")
        while True:
            print("\nMenu:")
            print("1. Register")
            print("2. Top-up balance")
            print("3. Check balance")
            print("4. Exit")
            choice = input("Enter your choice: ")
            if choice == '1':
                self.register_user()
            elif choice == '2':
                phone_number = input("Enter your phone number: ")
                if phone_number in self.users:
                    self.top_up_balance(phone_number)
                else:
                    print("User not registered. Please register first.")
            elif choice == '3':
                phone_number = input("Enter your phone number: ")
                if phone_number in self.users:
                    self.display_balance(phone_number)
                else:
                    print("User not registered. Please register first.")
            elif choice == '4':
                print("Thank you for using our service. Goodbye!")
                break
            else:
                print("Invalid choice. Please select again.")

# Main function to run the program
def main():
    airtime_system = AirtimePurchaseSystem()
    airtime_system.start()

if __name__ == "__main__":
    main()

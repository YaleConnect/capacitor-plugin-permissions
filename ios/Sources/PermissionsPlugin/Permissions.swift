import Foundation

@objc public class Microphone: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

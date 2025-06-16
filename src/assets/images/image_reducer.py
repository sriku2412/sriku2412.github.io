import cv2
import numpy as np

def resize_and_pad(image_path):
    target_w, target_h = 1098, 720  # Updated target dimensions

    # Load the image
    img = cv2.imread(image_path)
    original_h, original_w = img.shape[:2]

    # Create a black canvas
    result = np.zeros((target_h, target_w, 3), dtype=np.uint8)

    # Resize image while maintaining aspect ratio
    scale = min(target_w/original_w, target_h/original_h)
    new_w = int(original_w * scale)
    new_h = int(original_h * scale)
    resized_img = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_AREA)

    # Compute top-left corner for centering
    top = (target_h - new_h) // 2
    left = (target_w - new_w) // 2

    # Paste resized image onto black canvas
    result[top:top+new_h, left:left+new_w] = resized_img
    return result


for i in range(1, 11):
    if i == 10:
        output_img = resize_and_pad(f'src/assets/images/mock{i}.png')
        cv2.imwrite(f'src/assets/images/mock{i}.png', output_img)
    else:
        output_img = resize_and_pad(f'src/assets/images/mock0{i}.png')
        cv2.imwrite(f'src/assets/images/mock0{i}.png', output_img)
        
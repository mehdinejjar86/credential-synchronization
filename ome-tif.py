import tifffile
import numpy
import os



resolutionunit = 0
image_dir = "/"

images = [tifffile.imread(os.path.join(image_dir,image_name)) for image_name in os.listdir(image_dir)]

data = np.array(images)

def frames(data):
    for frame in data:
        yield frame

tifffile.imwrite(
    'temp1.ome.tif',
    frames(data),
    shape=data.shape,
    dtype=data.dtype,
    metadata={'axes': 'CYX'},

    photometric='minisblack',
    resolutionunit=resolutionunit,
)

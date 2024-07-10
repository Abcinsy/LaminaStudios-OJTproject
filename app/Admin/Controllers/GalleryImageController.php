<?php

namespace App\Admin\Controllers;

use App\Models\GalleryImage;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class GalleryImageController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'GalleryImage';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new GalleryImage());

        $grid->column('id', __('Id'));
        $grid->column('gallery_id', __('Gallery id'));
        $grid->column('image_id', __('Image id'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(GalleryImage::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('gallery_id', __('Gallery id'));
        $show->field('image_id', __('Image id'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new GalleryImage());

        $form->number('gallery_id', __('Gallery id'));
        $form->number('image_id', __('Image id'));

        return $form;
    }
}
